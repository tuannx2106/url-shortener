import React from 'react'

const FormUrlShorten = props => {
  return (
    <form className="form-url-shorten">
      <input type="url" className="form-control form-url-shorten__input" placeholder="Shorten a link here ..." />
      <button type="submit" className="button button--primary button--square form-url-shorten__action">Shorten it!</button>
    </form>
  )
}

export default FormUrlShorten