import { useState } from 'react';
import { Document, Page } from 'react-pdf';



const MyApp = (pdf) => {
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <div>
            <Document file={pdf}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    );
}

export { MyApp }