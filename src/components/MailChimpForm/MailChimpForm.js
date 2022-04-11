import React from 'react';
import Mailchimp from 'react-mailchimp-form';

import './MailChimpForm.css';

export default function MailChimpForm() {
  return (
    <div className="SubscribeForm">
      <p>Subscribe to get updates on what&apos;s brewing at Tasting Grounds!</p>
      <Mailchimp
        action="https://tastinggrounds.us10.list-manage.com/subscribe/post?u=19f93250121d7002858f4fb13&amp;id=5dfec9ae90"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'email',
            type: 'email',
            required: true,
          },
        ]}
        messages={
                    {
                      sending: 'Subscribing...',
                      success: 'Thanks for subscribing!',
                      error: 'An unexpected internal error has occurred.',
                      empty: 'Whoops - enter a valid e-mail address.',
                      duplicate: 'Looks like you are already subscribed. Contact us if you think otherwise!',
                      button: 'Subscribe',
                    }
                  }
      />
    </div>
  );
}
