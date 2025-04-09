import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    try {
      setResumeUrl(`${process.env.REACT_APP_BACKEND_URL}/api/resume/view`); // Your backend URL
    } catch (error) {
      console.log("Kuch To Gadbald he Daya");
    }
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h3 className="d-flex justify-content-center">Download Resume</h3>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={`${process.env.REACT_APP_BACKEND_URL}/api/resume/download`}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
