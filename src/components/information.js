
import React from 'react';


const Info = (props) => {
    const {value}=props;
    console.log(value);
  return (
    //information according drop-down
    <div>
          <div className="info">
              { value==1 ?
                <p>React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                : value==2 ?
                <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.</p>
                : value==3 ?
                <p>MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.The document model maps to the objects in your application code, making data easy to work with</p>
                : null
              }
            {/* {value===2 ?
              <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.</p>
              : null
            }
              {value===3 ?
              <p>MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.The document model maps to the objects in your application code, making data easy to work with</p>
              : null
            } */}
            </div>
      </div>
  );
}

export default Info;