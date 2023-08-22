import Link from "next/link";

const FOOTERLINKS = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "feature",
    route: "/feature",
  },
  {
    label: "about us",
    route: "/aboutUs",
  },
  {
    label: "terms",
    route: "/terms",
  },
  {
    label: "privacy",
    route: "/privacy",
  }
];

export function FooterComp()  {
  return (
    <footer className="w-full border-2">
      <div className="w-full">
        <div>
          <span>Logo</span>
        </div>
        <div>
          <div>
            <ul className="capitalize">
                {
                    FOOTERLINKS.map(({label, route}) =>(
                        <li key={route}>
                            <Link href={route}> {label} </Link>
                        </li>
                    ))
                }
            </ul>
            <span></span>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
