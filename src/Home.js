import { useEffect, useCallback, useState } from "react";
import JSONPretty from "react-json-pretty";
import { useHgraph } from "@hgraph.io/sdk";
import "react-json-pretty/themes/monikai.css";

const LatestTransaction = `
query LatestTransaction {
  transaction(limit: 3, order_by: {consensus_timestamp: desc}) {
    id,
    consensus_timestamp
  }
}`;

export default function Home() {
  const hgClient = useHgraph();
  const [result, setResult] = useState();

  const getTransactions = useCallback(async () => {
    const response = await hgClient.query(LatestTransaction);
    setResult(response);
  }, [hgClient]);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return <JSONPretty id="json-pretty" data={result}></JSONPretty>;
}
