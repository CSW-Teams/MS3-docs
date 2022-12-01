import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Medici" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Strutturati</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nome
                  </th>
                  <th scope="col" className="border-0">
                    Cognome
                  </th>
                  <th scope="col" className="border-0">
                    Nazione
                  </th>
                  <th scope="col" className="border-0">
                    Città
                  </th>
                  <th scope="col" className="border-0">
                    Cellulare
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Domenico</td>
                  <td>Verde</td>
                  <td>Equador</td>
                  <td>Roma</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Luca</td>
                  <td>Fiscariello</td>
                  <td>Estonia</td>
                  <td>Borghetto di Vara</td>
                  <td>1-660-850-1647</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Giovanni</td>
                  <td>Cantone</td>
                  <td>Italia</td>
                  <td>Roma</td>
                  <td>214-4225</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Daniele</td>
                  <td>Angela</td>
                  <td>Italia</td>
                  <td>Roma</td>
                  <td>1-848-473-7416</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Specializzandi</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nome
                  </th>
                  <th scope="col" className="border-0">
                    Cognome
                  </th>
                  <th scope="col" className="border-0">
                    Nazione
                  </th>
                  <th scope="col" className="border-0">
                    Città
                  </th>
                  <th scope="col" className="border-0">
                    Cellulare
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Federica</td>
                  <td>Villani</td>
                  <td>Italia</td>
                  <td>Roma</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Martina</td>
                  <td>Salvati</td>
                  <td>Italia</td>
                  <td>Roma</td>
                  <td>1-660-850-1647</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Giovanni</td>
                  <td>Nathan</td>
                  <td>Italia</td>
                  <td>Milano</td>
                  <td>214-4225</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Antonio</td>
                  <td>Angela</td>
                  <td>Liberia</td>
                  <td>Bad Hersfeld</td>
                  <td>1-848-473-7416</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
