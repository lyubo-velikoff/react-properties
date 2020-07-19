import React from 'react'

const isEmpty = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}

class PhotosPage extends React.Component {

  state = {
    data: {}
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/photos')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state
    return (
      <div className="container">
        <div className='shadow-md bg-white p-4'>
          Welcome to photos page
          </div>

        <div className='flex justify-between flex-wrap flex-row'>
          {!isEmpty(data) 
            ? Object.keys(data).map(key => <div key={key} className='w-1/4 p-2'>
                <div className='bg-white shadow-md p-2'>
                  <img src={data[key].url} alt="logo"/>
                  {data[key].property_id}
                </div>
            </div>)
            : null
          }
        </div>
      </div>
    )
  }
}

export default PhotosPage