import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
    return (
        <div style={{
            backgroundImage: "url(gif1.gif)",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0"
        }}>
            <h1 style={{ textAlign: "center", color: "white" }}>ERROR PAGE</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginBottom: "20px"
            }}>
                
                <a href="/"><button style={{
                    color: "black",
                    width: "150px",
                    height: "50px",
                    fontSize: "18px"
                }}>Home</button></a>
            </div>
        </div>
    );
}

export default Error;
