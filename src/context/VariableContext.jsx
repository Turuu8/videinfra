import { createContext, useContext, useState } from "react";
const Context = createContext();

export const PathContext = ({ children }) => {
  const [path, setPath] = useState(`/work/${window.location.href.split("//")[1].split("/")[2]}`);
  const [blog, setBlog] = useState(`/blog/${window.location.href.split("//")[1].split("/")[2]}`);
  const [detail, setDetail] = useState([]);
  const [blogDetail, setBlogDetail] = useState([]);
  return (
    <Context.Provider
      value={{ path, setPath, detail, setDetail, blog, setBlog, blogDetail, setBlogDetail }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextPath = () => useContext(Context);
