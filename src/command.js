import { error, bold, messageRed, neonGreen } from './log';
import { basicTable } from './table';
import { getAllMilestones } from './github';

const lsMilestone = () => {

    const milestoneTable = basicTable();

    milestoneTable.push(
        [
            {
                colSpan: 5,
                content: bold('MILESTONES'),
                hAlign: 'left',
                vAlign: 'center',
            },
        ],
        [
            bold('TITLE'),
            bold('STATE'),
            bold('DESCRIPTION'),
            bold('OPEN ISSUES'),
            bold('CLOSED ISSUES'),
        ]
    );

    getAllMilestones().then((data) => {
        var milestones = data.map(function(elem) {
            milestoneTable.push(
                [
                    bold(elem.title),
                    elem.state,
                    elem.description,
                    messageRed(elem.open_issues),
                    neonGreen( elem.closed_issues),
                ]
            );
        });
        console.log(milestoneTable.toString());
    });


}

export { lsMilestone };