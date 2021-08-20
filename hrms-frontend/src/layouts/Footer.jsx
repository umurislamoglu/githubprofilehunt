import React from "react";
import { Grid, Segment, Container } from "semantic-ui-react";

export default function Footer() {
  return (
    
      <Container >
        <Grid columns="equal" divided padded >
          <Grid.Row color="black" textAlign="center">
            <Grid.Column>
              <Segment color="black" inverted>
                <p>HRMS Network</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <ul>
                  <li>Kullanım Koşulları</li>
                  <li>S.S.S</li>
                  <li>İletişim</li>
                </ul>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <p>Biz Kimiz?</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    
  );
}
