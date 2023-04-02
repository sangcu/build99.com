import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

interface PdfViewerProps {
  pdfUrl: any
}
const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="h-[400px]">
        <Viewer fileUrl={pdfUrl} />
      </div>
    </Worker>
  )
}

export default PdfViewer
