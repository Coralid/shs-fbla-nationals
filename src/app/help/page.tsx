import {Metadata} from "next";
import { getQuestions } from "@/app/lib/data"
// import AskQuestionForm from "@/components/forms/Question/askQuestion";
// import {AnswerQuestion, DeleteQuestion} from "@/components/Buttons";
import {auth} from "@/../auth";
import styles from "./page.module.css";

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
        <>
            <h1>Help Page</h1>
            <br />
            <hr />
            <br />
            <h2>About:</h2>
            <p>
                This web application is built to allow Staley High School’s Career and Technical Education Department to
                collect and store information about business and community partners.
            </p>
            <br />
            <h2>Home Page:</h2>
            <p>
                The home page contains the entirety of our partner database. Selecting the &quot;&nbsp;
                <span className={styles.highlight}>Export to Excel</span>
                &nbsp;&quot; button will automatically download a full database copy in Microsoft Excel format. Selecting the
                name of any of the partners will direct you to their individual page, where you can see their info in a
                more convenient format. When you are logged in, you can also&nbsp;
                <span className={styles.highlight_red}> delete </span>
                &nbsp;partners from the database. While logged in, you may&nbsp;
                <span className={styles.highlight}> update </span>
                &nbsp;the partner as well.
            </p>
            <br />
            <h2>Individual Partner Page Help:</h2>
            <p>
                This page is unique to each partner, and displays all the information we store on them. This includes:
                name, address, phone number, and the category they fall under. If you are logged in, you also have
                access to&nbsp;
                <span className={styles.highlight_red}> delete </span>
                &nbsp;and&nbsp;
                <span className={styles.highlight}> update </span>
                &nbsp;the partner.
            </p>
            <br />
            <h2>Search Help (Includes Export Help):</h2>
            <p>
                The search page allows you to search/filter our partners by name, address, phone number, and category.
                You can also export the search results to an excel spreadsheet. Exporting with no search criteria will
                return the entire database. If you are logged in, you can also use this page to
                &nbsp;<span className={styles.highlight_red}> delete </span>
                &nbsp;and&nbsp;
                <span className={styles.highlight}> update </span>
                &nbsp;the partners.
            </p>
            <br />
            <h2>New Partner Help (Requires Login):</h2>
            <p>
                This page is a form that allows you to add a new partner to the database. Simply fill out the form with
                the partner&apos;s name, address, phone number, and category. The category selection box allows you to
                either select a preexisting category, or when a fitting category does not exist, you can create a new
                one. Once you have filled out the form, select the &quot;&nbsp;
                <span className={styles.highlight}>Create Partner</span>
                &nbsp;&quot; button to add the
                partner to the database. You must be logged in to use this feature. The page will give you a button to
                redirect to the login page.
            </p>
            <br />
            <h2>Login Help:</h2>
            <p>
                To login, simply select the&nbsp;
                <span className={styles.highlight}> Login </span>
                &nbsp;button in the top righthand corner of the page. You will be redirected to
                a login page where you can enter your username and password. Once you have entered your credentials,
                select the &quot;&nbsp;
                <span className={styles.highlight}>Login</span>
                &nbsp;&quot; button to log in. If you do not have an account, contact the organization administrator at
                +1 (999) 999-9999, or at admin@exampleorg.com. After logging in, you will be redirected back to the home
                page.
            </p>
            <br />
            <h2>Logout Help:</h2>
            <p>
                While logged in, simply select the &quot;&nbsp;
                <span className={styles.highlight}>Sign Out</span>
                &nbsp;&quot; text in the top right corner of the page (within the navigation bar) to log out. You will be
                immediately signed out.
            </p>
            <br />
            {/*This is the dynamic Help Section*/}
            <h2>Interactive Q&A Help:</h2>
            <div>
                <div>
                    <h3>Questions:</h3>
                    {/*We map the list of questions to allow for dynamic rendering*/}
                    {questions.map((question) => {
                        return (
                            <div key={question.id}>
                                {/*Show the question*/}
                                <h3 className={"text-lg"}>
                                    {question.question}
                                </h3>
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
        </>
    );
}