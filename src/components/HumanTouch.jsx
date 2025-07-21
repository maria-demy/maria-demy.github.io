import PropTypes from 'prop-types'

const HumanTouch = ({ id }) => {
  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <div className="card">
          <h4 className="text-lg font-semibold text-theme-primary mb-3 font-heading">The Human Touch</h4>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 text-center md:text-left">
              <p className="text-theme-secondary italic font-body">
                When I'm not writing code, I'm on the mats doing jits🥋, baking bread🍞, or catching up on tech. 
                My cat oversees all operations, especially those involving keyboards. Also active in <a href="https://hertechcircle.com" target="_blank" rel="noopener noreferrer" className="text-theme-accent hover:text-theme-accent-hover">Her Tech Circle</a>.
              </p>
            </div>
            <div className="flex-shrink-0 flex justify-center">
              <img 
                src="/cat-picture.jpg" 
                alt="My cat helping with project management by blocking the screen" 
                className="w-48 h-48 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HumanTouch.propTypes = {
  id: PropTypes.string.isRequired
}

export default HumanTouch 