export const Comment = ({ icon }) => {
  return (
    <section className="coment">
      <p className="coment-first-text">A lo largo de mi carrera como Backend, he tenido <br/> el privilegio de trabajar en empresas retadores e increíbles</p>
      <p className="coment-second-text">Aquí hay algunos que me gustaría compartir.</p>
      <a href="#project">
        <img src={ icon } alt="Flecha morada apuntando hacia abajo" />
      </a>
    </section>
  )
}
