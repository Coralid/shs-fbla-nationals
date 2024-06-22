'use client'

import Link from "next/link";
import {Session} from "next-auth";
import {useState} from "react";
import {rotate} from "next/dist/server/lib/squoosh/impl";

export default function Nav({session}: { session: Session | null }) {

    const [orgOptions, setOrgOptions] = useState(true);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        SHS Sponsors
                    </Link>
                </li>
                <li>
                    <button onClick={() => setOrgOptions((prev) => !prev)}>
                        <svg style={{transition: "transform 200ms ease-in-out", transform: orgOptions ? "rotate(180deg)" : "rotate(90deg)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10,0C4.48,0,0,4.48,0,10s4.48,10,10,10,10-4.48,10-10S15.52,0,10,0ZM13.14,12.1l-3.14-3.14-3.14,3.14-1.41-1.41,4.56-4.56,4.56,4.56-1.41,1.41Z"/>
                        </svg>
                        North Kansas City School District
                    </button>
                    <ul style={{
                        transition: "all 200ms ease-in-out",
                        opacity: orgOptions ? "1" : "0",
                        maxHeight: orgOptions ? "50vh" : "0"
                    }}>
                        <li>
                            <Link href="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19.95">
                                    <path
                                        d="M9,10.36V0C3.95.5,0,4.76,0,9.95c0,5.52,4.48,10,10,10,2.4,0,4.6-.85,6.33-2.26l-7.33-7.33Z"/>
                                    <path
                                        d="M11,9.54l6.74,6.74c1.41-1.72,2.26-3.93,2.26-6.33,0-5.19-3.95-9.45-9-9.95v9.54Z"/>
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/funds">
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.93 21.2">
                                    <path
                                        d="M9.93,7.53v-.47c0-2.19-1.47-4.13-3.55-4.75V0h-2.84v2.31C1.47,2.93,0,4.87,0,7.06c0,2.74,2.23,4.97,4.97,4.97,1.17,0,2.13.95,2.13,2.13s-.95,2.13-2.13,2.13-2.13-.95-2.13-2.13v-.47H0v.47c0,2.19,1.47,4.13,3.55,4.75v2.29h2.84v-2.29c2.08-.62,3.55-2.56,3.55-4.75,0-2.74-2.23-4.97-4.97-4.97-1.17,0-2.13-.95-2.13-2.13s.95-2.13,2.13-2.13,2.13.95,2.13,2.13v.47h2.84Z"/>
                                </svg>
                                &nbsp;Funds
                            </Link>
                        </li>
                        <li>
                            <Link href="/partners">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.23 20.15">
                                    <circle cx="9.62" cy="5.08" r="5.08"/>
                                    <path
                                        d="M9.78,10.36C4.47,10.27.09,14.5,0,19.81l19.23.34c.09-5.31-4.14-9.69-9.45-9.78Z"/>
                                </svg>
                                Partners
                            </Link>
                        </li>
                        <li>
                            <input type="search" placeholder="Search Partners"/>
                            <div className="svg-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.71 20.71">
                                    <path
                                        d="M20.71,19.29l-7.25-7.25c.96-1.26,1.54-2.83,1.54-4.54C15,3.36,11.64,0,7.5,0S0,3.36,0,7.5s3.36,7.5,7.5,7.5c1.71,0,3.28-.58,4.54-1.54l7.25,7.25,1.41-1.41Z"/>
                                </svg>
                            </div>
                        </li>
                        <li>
                            <Link href="/goals">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.48 27.48">
                                    <path
                                        d="M13.74,27.48C6.16,27.48,0,21.32,0,13.74S6.16,0,13.74,0s13.74,6.16,13.74,13.74-6.16,13.74-13.74,13.74ZM13.74,3.93c-5.41,0-9.81,4.4-9.81,9.81s4.4,9.81,9.81,9.81,9.81-4.4,9.81-9.81S19.15,3.93,13.74,3.93Z"/>
                                    <path
                                        d="M13.74,19.86c-3.37,0-6.12-2.75-6.12-6.12s2.75-6.12,6.12-6.12,6.12,2.75,6.12,6.12-2.75,6.12-6.12,6.12ZM13.74,11.55c-1.21,0-2.19.98-2.19,2.19s.98,2.19,2.19,2.19,2.19-.98,2.19-2.19-.98-2.19-2.19-2.19Z"/>
                                </svg>
                                Goals
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/help">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M10,0C4.48,0,0,4.48,0,10s4.48,10,10,10,10-4.48,10-10S15.52,0,10,0ZM10,4c.78,0,1.41.63,1.41,1.41s-.63,1.41-1.41,1.41-1.41-.63-1.41-1.41.63-1.41,1.41-1.41ZM12.12,17c-2.29,0-3.12-1.86-3.12-3.12v-3.24h-1.12v-2h3.12v5.24c0,.41.17,1.12,1.12,1.12v2Z"/>
                        </svg>
                        Help
                    </Link>
                </li>
            </ul>
        </nav>
    );
}