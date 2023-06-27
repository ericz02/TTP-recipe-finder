import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Gordon Ramsey',
      position: 'Head Chef',
      bio: 'With over 15 years of experience in the culinary world, Ramsey brings a wealth of expertise to our team. He has a passion for experimenting with flavors and creating innovative dishes that delight the taste buds.',
      image: 'https://i2-prod.mirror.co.uk/incoming/article25219228.ece/ALTERNATES/s1200b/0_EHP_CHP_141021Gordon-Ramsay-_58659.jpg',
    },
    {
      name: 'Ratatouille',
      position: 'Soup Chef',
      bio: 'Ratatouille\'s love for baking started at a young age. He has mastered the art of creating delectable desserts that are as visually appealing as they are delicious. His attention to detail and creativity add a unique touch to our dessert recipes.',
      image: 'https://pbs.twimg.com/media/FHUy1lOWYAMOk6G.jpg',
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">Welcome to our recipe website!</p>
      <p className="text-gray-700 mb-4">Here, you'll find a wide variety of delicious recipes to explore and try in your kitchen. Whether you're a seasoned chef or just starting out, our collection of recipes is designed to cater to different tastes and skill levels.</p>
      <p className="text-gray-700 mb-4">We are passionate about cooking and sharing our love for food with others. Our goal is to provide you with inspiring recipes, helpful cooking tips, and culinary adventures that will enhance your cooking experience.</p>
      <p className="text-gray-700 mb-4">Feel free to browse through our recipe collection, save your favorites, and embark on a culinary journey with us. We hope you enjoy creating and savoring these mouthwatering dishes as much as we do!</p>
      <p className="text-gray-700">Happy cooking!</p>

      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-2 gap-6">
          {teamMembers.map(member => (
            <div key={member.name} className="flex flex-col items-center">
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 object-cover mb-2" />
              <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
              <p className="text-gray-700 text-center">{member.position}</p>
              <p className="text-gray-700 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;