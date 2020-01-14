import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormMain from './Primitives/FormMain'
import TableEditable from './Primitives/TableEditable'
import formContractsConfig from './contentHelpers/contractsEditFormConfig.json'
import formContractsEditConfig from './contentHelpers/contractsEditFormConfig.json'
import contractsTable from './contentHelpers/contractsTable.json'
import { contractActions, alertActions } from '../../_actions'

const Contracts = ({ ...props }) => {

    const [tab, setTab] = useState("recentContracts")
    const [title, setTitle] = useState()
    const {
        focus,
        submit,
        get,
        modify,
        clear,
        contracts
    } = props;

    !contracts && get("")

    const onClick = (e) => {
        setTab(e.target.value)
        console.log(e.target.value)
        setTitle(e.target.value ==
        "recentContracts" ? "Last 10 Approved Contracts" : e.target.value ==
        "newCustomer" ? "Hinzufügen" : "")
        e.target.value == "recentContracts" && get("")
        clear()
    }

    const editEntry = (id) => {
        setTab("editContract")
        setTitle("Edit")
        get(id)
    }

    const handleSearch = (e) => {
        setTab("searchContracts")
        setTitle("Search")
        e.preventDefault()
        get(e.target[1].selectedOptions[0].value + "=" + e.target[0].value)
    }


    return (
        <Container>
            <Row  className="mt-0 bg-dark stickyRow">

                <Button className="m-2" onClick={onClick} value="recentContracts" size="sm" variant="dark">Recently Approved</Button>
                <Button className="m-2" onClick={onClick} value="top20" size="sm" variant="dark">Top 20</Button>
                <Button className="m-2" onClick={onClick} value="needsAttention" size="sm" variant="dark">Need Attention</Button>

                <Form className="m-2 ml-auto" inline onSubmit={handleSearch}>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 bg-dark" />

                        <InputGroup.Text className="p-0 px-2 bg-dark" id="inputGroupPrepend">
                            by:
                            <Form.Control className="h-75 p-0 m-0 bg-dark" as="select">
                                <option value="lastName">Nachname</option>
                                <option value="ref">AR Ref</option>
                            </Form.Control>
                        </InputGroup.Text>

                        <Button size="sm" variant="dark" type="submit">Search</Button>
                    </InputGroup>
                </Form>

            </Row>
            <h3 className="text-center"> {title} </h3>

            {tab == "newContract" &&
            <FormMain
                formFields={formContractsConfig}
                formData=""
                loading=""
                buttonName="submit Proposal"
                onSubmit={submit} />}

            {tab == "editContract" &&
            <FormMain
                formFields={formContractsEditConfig}
                formData={contracts.entries && contracts.entries[0]}
                loading=""
                buttonName="Edit"
                onSubmit={modify} />}

            {tab == "recentContracts" &&
            <TableEditable entries={contracts} editEntry={editEntry} config={contractsTable}/>
            }
            {tab == "searchContracts" &&
            <TableEditable entries={contracts} editEntry={editEntry} />
            }
        </Container>
    );
}

function mapState(state) {
    const { focus } = state.content
    const { contracts } = state.contracts
    return { focus, contracts }
}

const actionCreators = {
    submit: contractActions.submit,
    get: contractActions.get,
    modify: contractActions.modify,
    clear: alertActions.clear
};

const connectedContracts= connect(mapState, actionCreators)(Contracts);
export default connectedContracts;