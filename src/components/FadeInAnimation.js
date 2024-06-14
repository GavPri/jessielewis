import React, { useRef, useEffect } from "react";

const FadeIn = ({ children, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};

export default FadeIn;
