export default {
  title: 'Mobile Banking App',
  blocks: [
    {
      type: 'hero',
      props: {
        title: 'Mobile Banking App',
        subtitle: 'Designing a secure and user-friendly mobile banking experience',
        image: 'https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg?auto=compress&cs=tinysrgb&w=1600',
        imageAlt: 'Mobile banking app interface'
      }
    },
    {
      type: 'metadata',
      props: {
        items: [
          { label: 'Client', value: 'National Bank' },
          { label: 'Role', value: 'UX/UI Designer' },
          { label: 'Timeline', value: '8 months (2023-2024)' },
          { label: 'Tools', value: 'Figma, Sketch, InVision' }
        ]
      }
    },
    {
      type: 'text',
      props: {
        heading: 'Overview',
        content: '<p>A leading financial institution approached us to redesign their mobile banking app. Their existing app had low user engagement and poor ratings in app stores.</p><p>Users complained about security concerns, confusing navigation, and difficulty completing basic banking tasks.</p>'
      }
    },
    {
      type: 'text',
      props: {
        heading: 'Design Approach',
        content: '<p>We adopted a security-first design philosophy while maintaining ease of use. Through extensive user testing with diverse demographics, we identified pain points and opportunities.</p><h3>Key features:</h3><ul><li>Biometric authentication for quick, secure access</li><li>Dashboard with customizable widgets</li><li>Intuitive money transfer interface</li><li>Clear transaction history with smart categorization</li><li>Built-in budgeting tools</li></ul>'
      }
    },
    {
      type: 'images',
      props: {
        layout: 'grid',
        images: [
          {
            src: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'App dashboard',
            caption: 'Customizable dashboard'
          },
          {
            src: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Transfer interface',
            caption: 'Simplified transfer flow'
          }
        ]
      }
    },
    {
      type: 'results',
      props: {
        title: 'Results',
        items: [
          {
            metric: 'App Store Rating',
            value: '4.7/5',
            description: 'Up from 2.8 stars'
          },
          {
            metric: 'Active Users',
            value: '+156%',
            description: 'Growth in daily active users'
          },
          {
            metric: 'Task Completion',
            value: '+89%',
            description: 'Improvement in successful transactions'
          },
          {
            metric: 'Support Tickets',
            value: '-64%',
            description: 'Decrease in customer support requests'
          }
        ]
      }
    }
  ]
};
