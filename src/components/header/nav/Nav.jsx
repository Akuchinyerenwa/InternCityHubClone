import "./Nav.css";

const NAV_ITEMS = [
  {
    link: "/about",
    title: "About"
  },
  {
    link: "/events",
    title: "Events"
  },
  {
    link: "/programs",
    title: "Programs"
  },
]
export const Nav = () => {

  return (
    <div className="nav-root">

      {
        NAV_ITEMS.map(({link, title})=><a key={title} href={link}>{title}</a>)
      }

    </div>
  )

}