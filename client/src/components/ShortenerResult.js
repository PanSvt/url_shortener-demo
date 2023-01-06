import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const ShortenerResult = ({ inputValue }) => {
  const [Shortener, setShortener] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortener(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  if (loading) {
    return <div className="noData">Loading...</div>;
  }
  if (error) {
    return <div className="noData">Something went wrong :X</div>;
  }

  return (
    <>
      {Shortener && (
        <div className="result">
          <p>{Shortener}</p>
          <CopyToClipboard text={Shortener} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default ShortenerResult;
