import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';

import Form from './form';
import NoLogged from './no-logged';

const title = '>> Claim Prizes 🎉';

const Hero = ({ info }) => {
  const { push } = useRouter();

  const all = useForm({
    defaultValues: {
      first_name: '',
    },
  });

  const onSubmit = (data) => {
    (async () => {
      const newData = await fetch('/api/claim', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ ...data, type: Array.isArray(data.type) ? data.type : [data.type] }),
      });

      const isValid = newData.json();
      if (isValid.invalid) {
        toast.error('Invalid submission, please refresh the page and try again');
        return;
      }

      push('/claim-success');
    })();
  };

  const { status } = useSession();
  if (status === 'loading') {
    return <></>;
  }
  if (status !== 'authenticated') {
    return <NoLogged />;
  }

  return (
    <FormProvider {...all}>
      <form
        className="safe-paddings relative mb-20 min-h-[600px]"
        onSubmit={all.handleSubmit(onSubmit)}
      >
        <div className="container relative z-10 flex h-full flex-col items-center justify-center">
          <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
            {title}
          </h1>
          <div className="w-500 mt-10 grid w-full max-w-[800px] grid-cols-[1fr] gap-x-5 gap-y-5">
            <Form info={info} />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

Hero.propTypes = {
  info: PropTypes.object,
};

export default Hero;
