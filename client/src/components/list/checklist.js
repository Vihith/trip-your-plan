import React from 'react'

import { connect } from 'react-redux'
import { startsetChecklist, startremoveChecklist} from '../../actions/checklist'

class CheckList extends React.Component {

    componentDidMount() {

        // axios.get('http://localhost:3005/user/checklists', {
        //     headers: {
        //         'x-auth': localStorage.getItem('userAuth')
        //     }
        // })
        //     .then(response => {
        //         this.props.dispatch(setChecklist(response.data))
        //         console.log(response.data)
        //     })
         this.props.dispatch(startsetChecklist())
    }




handleRemove = (id) => {
    this.props.dispatch(startremoveChecklist(id))
}
render(){
    return (
        <div>

            <ul>
                { this.props.checklist.map(checklists => {
                    return <li key={checklists._id}>{checklists.name}<button onClick={() => {
                        const confirmRemove = window.confirm('Are you sure?')
                        if (confirmRemove) {
                            this.handleRemove(checklists._id)
                        }
                    }}>remove</button></li>
                })}
            </ul>
        </div>
    )
}
}
                

const mapStateToProps = (state) => {
    return {
        checklist: state.checklist
    }
}
export default connect(mapStateToProps)(CheckList) 