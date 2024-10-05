import React from 'react'
import 'reactjs-popup/dist/index.css'
import MessageSender from '@/MessageSender';
import NotePad from '@/NotePad';
import Inbox from '@/Inbox';
import UserList from '@/UserList';
import WorkSchedule from '@/WorkSchedule';
import AddSchedule from '@/AddSchedule';
import WorkScheduleWeekly from '@/WorkScheduleWeekly';
import '@/Schedule.css';
import Komentarze from '@/Komentarze';
import TreningUser from '@/TreningUser';
import TreningUserLuzak from '@/TreningUserLuzak';
import WorkScheduleWeeklyDlaPracownikow from '@/WorkScheduleWeeklyDlaPracownikow';
import AddTask from '@/AddTask';
import TaskList from '@/TaskList';
import TaskListDlaPracownikow from '@/TaskListDlaPracownikow';


const Home = async () => {

    return (
        <main className="flex min-h-fit flex-col items-center justify-between p-24">


            <div
                className="content-center ml-8 w-full grid grid-cols-1 gap-10 rounded-tl-xl  text-xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">
                <div>
                    <div className=" text-2xl text-center font-extrabold ">
                        Harmonogram pracy
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">

                    </h1>
                    <WorkSchedule/>
                </div>
            </div>

            <div
                className="content-center ml-8 w-full grid grid-cols-1 gap-10 rounded-tl-xl  text-xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">
                <div>
                    <div className="text-2xl text-center font-extrabold ">
                        Harmonogram tygodniowy
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">

                    </h1>
                    <WorkScheduleWeekly/>
                </div>
            </div>

            <div
                className="content-center ml-8 w-full grid grid-cols-1 gap-10 rounded-tl-xl  text-xl text-left mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">
                <div>
                    <div className=" text-2xl text-center font-extrabold mb-2 ">
                        Przypisz zadanie dla pracownika
                    </div>

                </div>

                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">

                    </h1>
                    <   AddTask/>
                </div>
            </div>
            <div
                className="content-center ml-8 w-full grid grid-cols-1 gap-10 rounded-tl-xl  text-xl text-justify mb-10 bg-white border-r-2 border-b-2 border-zinc-200 p-5 dark:bg-gradient-to-b dark:from-zinc-800 dark:bg-zinc-800 dark:border-b-2 dark:border-r-2 dark:border-gray-600   ">
                <div>
                    <div className="text-2xl text-center font-extrabold ">
                        Lista zadań dla uzytkownikow
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-center text-2xl w-auto">

                    </h1>
                    <TaskList/>
                </div>
            </div>


        </main>


    )
}

export default Home;