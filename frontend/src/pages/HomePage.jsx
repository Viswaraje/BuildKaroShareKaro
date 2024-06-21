
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";

import React from 'react'
import Spinner from "../components/Spinner";

function HomePage() {
  return (
    <div className='m-4'>
			<Search/>
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>

      <ProfileInfo/>
      <Repos/>
      <Spinner/>
			
			</div>
		</div>
  )
}

export default HomePage
