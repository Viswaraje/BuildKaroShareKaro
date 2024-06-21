import React from 'react'
import Repo from "./Repo";

export default function Repos() {
  return (
    <div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				<Repo />
				<Repo />
				<Repo />
			</ol>
		</div>
  )
}
