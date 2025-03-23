import React from 'react'
import ForumCard from './ForumCard'
import Heading from '../Heading'


function Forum() {
  return (
        <div className="p-6">
           <Heading title="Forums" />

            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ForumCard
                    title="Beginners"
                    subTitle="Discussions about C++ programming for beginners"
                    latest='"Getter for enum member returns a copy of enum?" on Mar 19, 2025 at 8:02am by TheIdeasMan'
                />
                 <ForumCard 
                    title="Windows Programming"
                    subTitle="Win32, MFC, ATL, C++/CLI, .NET ..."
                    latest='"Formatted Console Log with Datetime" on Mar 12, 2025 at 9:29pm by seeplus'
                />
                 <ForumCard 
                    title="UNIX/Linux Programming"
                    subTitle="Programming C++ for UNIX and Linux"
                    latest='tzdb: cannot locate zone" on Mar 3, 2025 at 2:07am by spistol'
                />
                 <ForumCard 
                    title="General C++ Programming"
                    subTitle="Anything about programming in C++"
                    latest='"Use C++ 20 with Embarcadero" on Mar 18, 2025 at 9:06am by salem c'
                />
                 <ForumCard 
                    title="Lounge"
                    subTitle="Discussions about this website, or other topics not related to C++ programming"
                    latest='"I wrote a cron job!" on Mar 15, 2025 at 11:32pm by jonnin'
                />
                 <ForumCard 
                    title="Jobs"
                    subTitle="Job offers for C++ programmers."
                    latest='"Jobs" on Apr 18, 2024 at 8:09pm by deleted account xyzzy'
                />
                 <ForumCard 
                    title="Articles"
                    subTitle="How-to's and other technical articles"
                    latest='"How to Make a Game 2" on Jul 29, 2011 at 12:21pm by anonymous23323124'
                />

            </div>

            
        </div>
  )
}

export default Forum