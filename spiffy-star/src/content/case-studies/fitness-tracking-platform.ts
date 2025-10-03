export default {
  title: 'Fitness Tracking Platform',
  blocks: [
    {
      type: 'hero',
      props: {
        title: 'Fitness Tracking Platform',
        subtitle: 'Creating an engaging fitness platform through data visualization',
        image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=1600',
        imageAlt: 'Fitness tracking dashboard'
      }
    },
    {
      type: 'metadata',
      props: {
        items: [
          { label: 'Client', value: 'FitLife Technologies' },
          { label: 'Role', value: 'Senior Product Designer' },
          { label: 'Timeline', value: '5 months (2024)' },
          { label: 'Tools', value: 'Figma, Framer, After Effects' }
        ]
      }
    },
    {
      type: 'text',
      props: {
        heading: 'The Challenge',
        content: '<p>FitLife needed to stand out in a crowded fitness app market. Users were overwhelmed by data and struggled to stay motivated with existing fitness tracking solutions.</p><p>The goal was to create a platform that makes health data accessible, actionable, and motivating.</p>'
      }
    },
    {
      type: 'text',
      props: {
        heading: 'Design Solution',
        content: '<p>We focused on making complex fitness data simple and engaging through thoughtful visualization and progressive disclosure.</p><h3>Key features:</h3><ul><li>Personalized fitness dashboard with smart insights</li><li>Goal setting with milestone celebrations</li><li>Social features for community support</li><li>Integration with popular fitness devices</li><li>Adaptive workout recommendations</li></ul>'
      }
    },
    {
      type: 'images',
      props: {
        layout: 'single',
        images: [
          {
            src: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1600',
            alt: 'Activity tracking interface',
            caption: 'Visual activity tracking with weekly trends'
          },
          {
            src: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=1600',
            alt: 'Workout planning screen',
            caption: 'Personalized workout planning interface'
          }
        ]
      }
    },
    {
      type: 'results',
      props: {
        title: 'Impact',
        items: [
          {
            metric: 'User Retention',
            value: '+78%',
            description: '90-day retention improvement'
          },
          {
            metric: 'Daily Engagement',
            value: '+124%',
            description: 'Increase in daily active usage'
          },
          {
            metric: 'Goal Completion',
            value: '73%',
            description: 'Users achieving their fitness goals'
          },
          {
            metric: 'Premium Conversions',
            value: '+91%',
            description: 'Growth in premium subscriptions'
          }
        ]
      }
    },
    {
      type: 'text',
      props: {
        heading: 'Reflections',
        content: '<p>This project demonstrated the power of thoughtful data visualization in driving user engagement. By making fitness data more approachable and celebratory, we helped users stay committed to their health journey.</p><p>The platform continues to evolve based on user feedback and emerging fitness trends.</p>'
      }
    }
  ]
};
