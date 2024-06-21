import {Metadata} from "next";
import { getQuestions } from "@/app/lib/data"
// import AskQuestionForm from "@/components/forms/Question/askQuestion";
// import {AnswerQuestion, DeleteQuestion} from "@/components/Buttons";
import {auth} from "@/../auth";

export const metadata: Metadata = {
    title: "Help",
}

export default async function Help() {
    // This is the Help page. It contains the static help information for the application, and a dynamic Q&A section.

    const user = await auth(); // get session status
    const questionsData = await getQuestions(); // get questions from the database
    const questions = questionsData.map(data => data.question); // extract the questions from the data

    // Render the help page
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <h1 className="text-4xl font-bold">Help Page</h1>

            <h2 className={"pt-20 text-2xl"}>About:</h2>
            <p className={"pt-2 text-justify"}>
                This web application is built to allow Staley High School’s Career and Technical Education Department to
                collect and store information about business and community partners.
            </p>


            <h2 className={"pt-10 text-2xl"}>Home Page Help:</h2>
            <p className={"pt-2 text-justify"}>
                The home page contains the entirety of our partner database. Selecting the &quot;
                <span className={"bg-[#217346] rounded px-2"}>Export to Excel</span>
                &quot; button will automatically download a full database copy in Microsoft Excel format. Selecting the
                name of any of the partners will direct you to their individual page, where you can see their info in a
                more convenient format. When you are logged in, you can also
                <span className={"text-red-500 hover:text-red-700 transition-all duration-300"}> delete </span>
                partners from the database. While logged in, you may
                <span className={"text-blue-500 hover:text-yellow-500 transition-all duration-300"}> update </span>
                the partner as well.
            </p>

            <h2 className={"pt-10 text-2xl"}>Individual Partner Page Help:</h2>
            <p className={"pt-2 text-justify"}>
                This page is unique to each partner, and displays all the information we store on them. This includes:
                name, address, phone number, and the category they fall under. If you are logged in, you also have
                access to
                <span className={"text-red-500 hover:text-red-700 transition-all duration-300"}> delete </span>
                and
                <span className={"text-blue-500 hover:text-yellow-500 transition-all duration-300"}> update </span>
                the partner.
            </p>

            <h2 className={"pt-10 text-2xl"}>Search Help (Includes Export Help):</h2>
            <p className={"pt-2 text-justify"}>
                The search page allows you to search/filter our partners by name, address, phone number, and category.
                You can also export the search results to an excel spreadsheet. Exporting with no search criteria will
                return the entire database. If you are logged in, you can also use this page to
                <span className={"text-red-500 hover:text-red-700 transition-all duration-300"}> delete </span>
                and
                <span className={"text-blue-500 hover:text-yellow-500 transition-all duration-300"}> update </span>
                the partners.
            </p>

            <h2 className={"pt-10 text-2xl"}>New Partner Help (Requires Login):</h2>
            <p className={"pt-2 text-justify"}>
                This page is a form that allows you to add a new partner to the database. Simply fill out the form with
                the partner&apos;s name, address, phone number, and category. The category selection box allows you to
                either select a preexisting category, or when a fitting category does not exist, you can create a new
                one. Once you have filled out the form, select the &quot;
                <span className={"bg-blue-500 rounded px-2"}>Create Partner</span>
                &quot; button to add the
                partner to the database. You must be logged in to use this feature. The page will give you a button to
                redirect to the login page.
            </p>

            <h2 className={"pt-10 text-2xl"}>Login Help:</h2>
            <p className={"pt-2 text-justify"}>
                To login, simply select the
                <span className={"italic"}> Login </span>
                button in the top righthand corner of the page. You will be redirected to
                a login page where you can enter your username and password. Once you have entered your credentials,
                select the &quot;
                <span className={"bg-teal-800 rounded px-2"}>Login</span>
                &quot; button to log in. If you do not have an account, contact the organization administrator at
                +1 (999) 999-9999, or at admin@exampleorg.com. After logging in, you will be redirected back to the home
                page.
            </p>

            <h2 className={"pt-10 text-2xl"}>Logout Help:</h2>
            <p className={"pt-2 text-justify"}>
                While logged in, simply select the &quot;
                <span className={"text-blue-500 hover:text-teal-500"}>Sign Out</span>
                &quot; text in the top right corner of the page (within the navigation bar) to log out. You will be
                immediately signed out.
            </p>

            {/*This is the dynamic Help Section*/}
            <h2 className={"pt-10 text-2xl"}>Interactive Q&A Help:</h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-900 p-4">
                <div className="bg-gray-800 px-6">
                    <h3 className={"text-lg border-b-2 border-gray-900 pt-4"}>Questions:</h3>
                    {/*We map the list of questions to allow for dynamic rendering*/}
                    {questions.map((question) => {
                        return (
                            <div
                                key={question.id}
                                className={'flex flex-col items-start justify-between py-4 last:border-b-0 border-b-2 border-b-gray-900'}
                            >
                                {/*Show the question*/}
                                <h1 className={"text-lg"}>
                                    {question.question}
                                </h1>
                                {/*Show the answer if it exists, otherwise show a message*/}
                                {question.answer ? (
                                    <p className={"pt-2 text-sm text-gray-400"}>
                                        Answer: {question.answer}
                                    </p>
                                ) : (
                                    <p className={"pt-2 text-sm text-gray-400"}>
                                        This question has not been answered yet. Please check back later.
                                    </p>
                                )}
                                {/*If the user is logged in, show the answer and delete buttons*/}
                                {user &&
                                    <div className={"flex flex-row justify-between items-center w-full pt-2"}>
                                        {/*If the question is already answered, don't show the answer button*/}
                                        {/*{!question.answer && <AnswerQuestion id={question.id}/>}*/}
                                        {/*<DeleteQuestion id={question.id}/>*/}
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
            {/*Form for asking Questions, open to anyone*/}
            <h2 className={"pt-10 text-2xl"}>New Question:</h2>
            {/*<AskQuestionForm/>*/}
        </main>
    );
}