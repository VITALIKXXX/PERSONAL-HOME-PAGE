import { ErrorBox } from "./ErrorBox";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";
import { useSelector } from "react-redux";
import { selectRepositoriesStatus, selectRepositories } from "../../../personalHomepageSlice";

export const Content = () => {

    const status = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);


    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox />;

        case "success":
            return <Repositories repositories={repositories} />

        default:
            throw new Error(`incorrect status: ${status}`);
    }
};