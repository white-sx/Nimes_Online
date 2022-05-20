import React from "react";
import useFetch from "../Api/useFetch";
import styles from "./Table.module.css";

function Table() {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    request("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer live_fd5fd233856f22218eeae7e03d386f"
      },
    });
  }, [request]);

  
    return (
      <>
      {data !== null ? <div>
          <table className={styles.tableStyle}>
            <thead>
              <tr>
                <th className={styles.tableStyleTh}>Clube</th>
                <th className={styles.tableStyleTh}>Pts</th>
                <th className={styles.tableStyleTh}>PJ</th>
                <th className={styles.tableStyleTh}>VIT</th>
                <th className={styles.tableStyleTh}>E</th>
                <th className={styles.tableStyleTh}>DER</th>
                <th className={styles.tableStyleTh}>GP</th>
                <th className={styles.tableStyleTh}>GC</th>
                <th className={styles.tableStyleTh}>SG</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <h1>carregando...</h1>
              ) : (
                data.map((data) => (
                  <tr key={data.time.time_id} className={styles.tableStyleTr}>
                    <td className={styles.tableStyleFirstTd}>
                      <div className={styles.tableStyleFirstTdPosi}>
                        {data.posicao}
                      </div>

                      <div>
                        {
                          <img
                            className={styles.tableStyleTdImg}
                            src={data.time.escudo}
                            alt={data.time.sigla}
                          />
                        }
                      </div>
                      <div className={styles.tableStyleFirstTdName}>
                        {data.time.nome_popular}
                      </div>
                    </td>
                    <td className={styles.tableStyleTd}>{data.pontos}</td>
                    <td className={styles.tableStyleTd}>{data.jogos}</td>
                    <td className={styles.tableStyleTd}>{data.vitorias}</td>
                    <td className={styles.tableStyleTd}>{data.empates}</td>
                    <td className={styles.tableStyleTd}>{data.derrotas}</td>
                    <td className={styles.tableStyleTd}>{data.gols_pro}</td>
                    <td className={styles.tableStyleTd}>{data.gols_contra}</td>
                    <td className={styles.tableStyleTd}>{data.saldo_gols}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div> : error}
        
      </>
    );
}

export default Table;
