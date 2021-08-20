import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "semantic-ui-react";
import JobAdvertService from "./../../services/JobAdvertService";
export default function AdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  });

  return (
    <div>
      <Container text>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Pozisyon</Table.HeaderCell>
              <Table.HeaderCell>Firma Adı</Table.HeaderCell>
              <Table.HeaderCell>Kişi Sayısı</Table.HeaderCell>
              <Table.HeaderCell>Son Basvuru Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Başvur</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobAdverts.map((jobAdvert) => (
              <Table.Row key={jobAdvert.id}>
                <Table.Cell>{jobAdvert.jobPosition}</Table.Cell>
                <Table.Cell>{jobAdvert.employerName}</Table.Cell>
                <Table.Cell>{jobAdvert.vacancy}</Table.Cell>
                <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <Button positive>Başvur</Button>
                    <Button.Or />
                    <Button>İncele</Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
