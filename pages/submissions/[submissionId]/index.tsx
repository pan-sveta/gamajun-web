import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import {StudentExamSubmissionDTO, StudentExamSubmissionDTOFromJSON} from "../../../types/gamajun.ts";
import SubmissionEditor from "../../../components/submissions/SubmissionEditor";
import SubmissionViewer from "../../../components/submissions/SubmissionViewer";
import {useSubmissionByIdQuery} from "../../../client/generated/generated-types";
import {useRouter} from "next/router";
import GamajunLoader from "../../../components/common/GamajunLoader";

const AllExams: NextPage = () => {
    const router = useRouter();
    const {submissionId} = router.query

    const {data, loading, error} = useSubmissionByIdQuery({
        variables: {
            id: typeof submissionId === 'string' ? submissionId : "NO ID"
        }
    });

    if (error)
        return <div>{error.message}</div>

    //TODO: Fix
    if (!data?.examSubmissionById || loading)
        return <GamajunLoader/>;


    if (data.examSubmissionById.examSubmissionState === "Draft")
        return <SubmissionEditor submission={data.examSubmissionById}/>
    else
        return <SubmissionViewer submission={data.examSubmissionById}/>
}

export default AllExams
