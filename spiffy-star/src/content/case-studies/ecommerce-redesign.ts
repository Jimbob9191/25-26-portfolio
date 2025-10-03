export default {
  title: 'E-commerce Platform Redesign',
  blocks: [
    {
      type: 'hero',
      props: {
        title: 'E-commerce Platform Redesign',
        subtitle: 'Transforming the shopping experience with a modern, intuitive interface',
        image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600',
        imageAlt: 'E-commerce platform interface'
      }
    },
    {
      type: 'metadata',
      props: {
        items: [
          { label: 'Client', value: 'Fashion Retailer Inc.' },
          { label: 'Role', value: 'Lead Product Designer' },
          { label: 'Timeline', value: '6 months (2024)' },
          { label: 'Tools', value: 'Figma, Adobe XD, Principle' }
        ]
      }
    },
    {
      type: 'text',
      props: {
        heading: 'The Challenge',
        content: '<p>Our client was experiencing declining conversion rates and increased cart abandonment. Users reported difficulty navigating the product catalog and completing purchases on mobile devices.</p><p>The existing interface was cluttered, inconsistent, and not optimized for the modern shopping experience customers expect.</p>'
      }
    },
    {
      type: 'text',
      props: {
        heading: 'The Solution',
        content: '<p>We conducted extensive user research, including interviews with 50+ customers and comprehensive usability testing. This informed a complete redesign focused on simplicity, clarity, and mobile-first design.</p><h3>Key improvements included:</h3><ul><li>Streamlined navigation with intelligent product categorization</li><li>Enhanced product pages with better imagery and information hierarchy</li><li>Simplified checkout flow reducing steps from 5 to 3</li><li>Responsive design optimized for all devices</li></ul>'
      }
    },
    {
      type: 'images',
      props: {
        layout: 'single',
        images: [
          {
            src: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600',
            alt: 'Product page redesign',
            caption: 'New product page with improved layout and information architecture'
          },
          {
            src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
            alt: 'Mobile shopping experience',
            caption: 'Mobile-optimized shopping experience'
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
            metric: 'Conversion Rate',
            value: '+45%',
            description: 'Increase in purchases after redesign'
          },
          {
            metric: 'Cart Abandonment',
            value: '-32%',
            description: 'Reduction in abandoned carts'
          },
          {
            metric: 'Mobile Revenue',
            value: '+67%',
            description: 'Growth in mobile sales'
          },
          {
            metric: 'User Satisfaction',
            value: '4.8/5',
            description: 'Average rating from customer surveys'
          }
        ]
      }
    },
    {
      type: 'text',
      props: {
        heading: 'Key Takeaways',
        content: '<p>This project reinforced the importance of user research and iterative design. By focusing on real user needs and continuously testing our assumptions, we created an experience that not only looks better but delivers measurable business results.</p><p>The success of this redesign has led to ongoing collaboration with the client on additional features and improvements.</p>'
      }
    }
  ]
};
