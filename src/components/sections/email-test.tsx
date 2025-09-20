'use client';

import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailTest() {
  useEffect(() => {
    // Test 1: Direct initialization
    try {
      emailjs.init('EcIuA3QmVOnPBlXPd');
      console.log('Test 1: Direct init successful');
    } catch (error) {
      console.error('Test 1 failed:', error);
    }

    // Test 2: Object initialization
    try {
      emailjs.init({
        publicKey: 'EcIuA3QmVOnPBlXPd',
      });
      console.log('Test 2: Object init successful');
    } catch (error) {
      console.error('Test 2 failed:', error);
    }

    // Test 3: Simple send test
    const testEmail = async () => {
      try {
        const result = await emailjs.send(
          'service_9915wvl',
          'template_f8eouim',
          {
            from_name: 'Test User',
            from_email: 'test@example.com',
            subject: 'Test Email',
            message: 'This is a test email',
          },
          'EcIuA3QmVOnPBlXPd'
        );
        console.log('Test 3: Send test successful', result);
      } catch (error) {
        console.error('Test 3 failed:', error);
      }
    };

    testEmail();
  }, []);

  return null;
}
