import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"
export function links(){
  return[
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "preload",
    href: imagen,
    as: "image"
  },
]
}

export function meta(){
  return{  
      title: "GuitarLA - Sobre Nosotros",
      description: "Venta de gutiarras, blog de música"
    }
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget pellentesque tortor, sed egestas massa. Aenean placerat, quam sed pellentesque tempor, leo elit consequat urna, non ultrices massa felis ut sapien. Sed sit amet sollicitudin arcu. Integer in enim in odio auctor viverra. Maecenas viverra purus nec tellus luctus, sit amet accumsan metus maximus. Nunc massa ex, ullamcorper convallis mattis vitae, auctor a ipsum. Sed mollis, justo vel dapibus dictum, turpis augue venenatis mauris, quis ultrices tellus augue ut quam. Nullam facilisis convallis magna id placerat. Nullam nisi enim, iaculis ut euismod quis, sodales id diam. Pellentesque odio leo, bibendum at porta id, tincidunt at odio.</p> 
          <p>Aenean eros eros, porttitor eu metus ac, maximus placerat lorem. Aliquam vel sem hendrerit, luctus eros nec, luctus nibh. Aliquam elementum tortor in arcu auctor, non iaculis nulla tincidunt. Nullam ipsum mi, pretium sed neque vitae, elementum hendrerit mauris. Nulla faucibus urna ex, quis elementum diam dictum non. Donec efficitur turpis vel enim porttitor, vitae commodo erat hendrerit. Integer auctor et massa eu fermentum. Praesent ultricies nulla urna, non efficitur tortor egestas non. Vestibulum facilisis, urna eget faucibus venenatis, nunc metus varius sem, sit amet tempor ex mi vitae lectus. Nam interdum tincidunt odio, non elementum orci. Suspendisse interdum sagittis felis, et pretium enim semper a.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
