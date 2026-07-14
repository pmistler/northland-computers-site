import Link from "next/link";
export default function ButtonLink({href,children,variant="primary"}:{href:string;children:React.ReactNode;variant?:"primary"|"secondary"|"light"|"outline"}){
 const cls=variant==="primary"?"bg-electric text-white hover:bg-cyan hover:text-navy shadow-glow":variant==="light"?"bg-white text-navy hover:bg-cyan":variant==="outline"?"border border-slate-300 bg-white text-navy hover:border-electric hover:text-electric":"border border-white/60 text-white hover:bg-white hover:text-navy";
 return <Link href={href} className={`focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold transition ${cls}`}>{children}</Link>
}