import { useEffect, useState } from "react";
 
const css = {
    padding: "2.5rem 0",
    color: " #999",
    textAlign: " center",
    backgroundColor: "#f9f9f9",
    borderTop: ".05rem solid #e5e5e5",
};
 
export const Footer = () => {
    const [footerHeight, setFooterHeight] = useState(null);
 
    useEffect(() => {
        const handleResize = () => {
            const footer = document.querySelector("footer");
            if (footer) {
                setFooterHeight(footer.offsetHeight);
            }
        };
 
        handleResize();
 
        window.addEventListener("resize", handleResize);
 
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <footer style={{ ...css, height: footerHeight }}>
                <p>
                    Giao diện được xây dựng bởi <a href="#">JobFiveTeam</a>.
                </p>
                <p>
                    <a href="#">Trở lại đầu trang</a>
                </p>
            </footer>
        </>
    );
};