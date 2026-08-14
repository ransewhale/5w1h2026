import Link from "next/link";

type MenuItemProps = {
  href: string;
  children: string;
};

export default function MenuItem({ href, children }: MenuItemProps) {
  return (
    <li className="MenuItem">
      <Link className="MenuItemLink" href={href}>
        {children}
        <span className="MenuQuestionMark">?</span>
      </Link>
    </li>
  );
}
