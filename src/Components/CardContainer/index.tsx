import React, { ComponentType } from 'react';
import { IssueCard, NotFoundCard } from '../index';

interface Issue {
    title: string,
    html_url: string,
    labels: Array<Object>,
    body:string,
    user:Object
    type: ComponentType,
    key:'string',
    props: Array<Issue>,
}

interface IssueCardListProps{
    data: Array<Issue>
}

const IssueCardList: React.FC<IssueCardListProps> = ({ data }) => {
    console.log(data);
    if (data && Array.isArray(data)) {
        return data.map((issue) => <IssueCard title={issue.title} html_url={issue.html_url} labels={issue.labels} body={issue.body} user={issue.user} />);
    } else {
        return <></>;
    }
};

interface CardContainerProps{
    data: Array<Issue>
}

export const CardContainer: React.FC<CardContainerProps> = ({ data }) => {
    return (
        < div >
            {data && data.length > 0 ? <IssueCardList data={data} /> : <NotFoundCard />}
        </div >
    );
};

