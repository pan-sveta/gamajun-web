import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import ExamEditor from "../../components/exams/ExamEditor";
import ExamCreator from "../../components/exams/ExamCreator";


const New: NextPage = () => {

    return (
        <ExamCreator/>
    )
}

export default New