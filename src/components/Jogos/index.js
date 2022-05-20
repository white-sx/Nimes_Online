import React from "react";
import useFetch from "../Api/useFetch";
import styles from "./Jogos.module.css";

function Jogos() {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    

    request("https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/7", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer live_fd5fd233856f22218eeae7e03d386f"
      },
    });
  }, [request, data]);

  console.log(data);
  if (data !== null)
    return (
      <>
        <div className={styles.contentG}>
          {data.partidas.map((data) => (
            <div key={data.partida_id} className={styles.box}>
              <div
                key={data.estadio.estadio_id}
                className={styles.contentHeader}
              >
                <p>{data.data_realizacao}</p> 
                <span>{data.estadio.nome_popular}</span>
                <p>{data.hora_realizacao}</p>
              </div>
              <div className={styles.contentBody}>
                <div className={styles.contentBodyMand}>
                  <h2>{data.time_mandante.sigla}</h2>
                  <img
                    style={{ width: "25px", marginLeft: "10px" }}
                    src={data.time_mandante.escudo}
                    alt={data.time_mandante.nome_popular}
                  />
                </div>
                <div className={styles.contentBodyPlac}>
                  <h2>{data.placar_mandante}</h2>
                  <p>X</p>
                  <h2>{data.placar_visitante}</h2>
                </div>
                <div className={styles.contentBodyVis}>
                  <h2> {data.time_visitante.sigla}</h2>
                  <img
                    style={{ width: "25px", marginLeft: "10px" }}
                    src={data.time_visitante.escudo}
                    alt={data.time_visitante.nome_popular}
                  />
                </div>
              </div>
              {data.status === "finalizado" ? (
                <a
                className={styles.link}
                  href="https://ge.globo.com/futebol/brasileirao-serie-a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>veja como foi</p>
                </a>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </>
    );
}

export default Jogos;
