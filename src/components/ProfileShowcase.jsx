import React from 'react';

const ProfileShowcase = ({ 
  profileImage = '/path-to-your-profile-image.jpg',
  name = 'Your Name',
  role = 'Full Stack Developer',
  description = 'Passionate about creating beautiful and functional web experiences with cutting-edge technologies.',
  stats = [
    { number: '50+', label: 'Projects' },
    { number: '10+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' }
  ]
}) => {
  return (
    <div className="profile-container">
      {/* Circular Profile Image with Rotating Gradient Ring */}
      <div className="profile-image-wrapper">
        <div className="gradient-ring"></div>
        <img 
          src={profileImage} 
          alt={name}
          className="profile-image"
        />
      </div>

      {/* Glassmorphism Card */}
      <div className="glassmorphism-card">
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-subtitle">{role}</p>
          <p className="card-description">{description}</p>

          {/* Stats Section */}
          <div className="card-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="card-buttons">
            <button className="card-btn btn-primary-card">
              Get in Touch
            </button>
            <button className="card-btn btn-secondary-card">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShowcase;
