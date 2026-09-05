import { useMemo, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Circle, Clock, Copy, Mail } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../components/common/BrandIcons';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useApp } from '../hooks/useApp';

export default function ContactPage() {
  const { personal } = PORTFOLIO_DATA;
  const { copyText, addToast } = useApp();
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setLocalTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: personal.timeZoneId,
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [personal.timeZoneId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    addToast('Message queued. I will reply by email.');
    reset();
  };

  const socials = useMemo(
    () => [
      { label: 'GitHub', href: personal.socials.github, icon: GithubIcon },
      {
        label: 'LinkedIn',
        href: personal.socials.linkedin,
        icon: LinkedinIcon,
      },
      {
        label: 'Twitter / X',
        href: personal.socials.twitter,
        icon: TwitterIcon,
      },
    ],
    [personal.socials]
  );

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Mail}
        kicker="Contact Workspace"
        title="Get in touch"
        description={`Send a scoped note or copy an email. Remote-friendly, typically ${personal.timezone}.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <GlassCard className="lg:col-span-3 space-y-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <Field
              label="Name"
              error={errors.name?.message}
              input={
                <input
                  className={inputClass(errors.name)}
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Use at least 2 characters',
                    },
                  })}
                />
              }
            />
            <Field
              label="Email"
              error={errors.email?.message}
              input={
                <input
                  type="email"
                  className={inputClass(errors.email)}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                />
              }
            />
            <Field
              label="Subject"
              error={errors.subject?.message}
              input={
                <input
                  className={inputClass(errors.subject)}
                  {...register('subject', {
                    required: 'Subject is required',
                  })}
                />
              }
            />
            <Field
              label="Message"
              error={errors.message?.message}
              input={
                <textarea
                  rows={5}
                  className={inputClass(errors.message)}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 20,
                      message: 'Share a bit more context (20+ characters)',
                    },
                  })}
                />
              }
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </Button>
          </form>
        </GlassCard>

        <div className="lg:col-span-2 space-y-4">
          <GlassCard className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-title">
              <Clock size={16} className="text-ink-muted" />
              Availability
            </div>
            <p className="text-sm text-ink-secondary">
              Currently {personal.timezone}
              {localTime ? ` · ${localTime}` : ''} · {personal.status}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary">
              <Circle size={8} className="fill-success text-success" />
              {personal.status}
            </div>
          </GlassCard>

          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-title">Direct email</p>
            <p className="text-xs font-mono text-ink-secondary break-all">
              {personal.email}
            </p>
            <Button
              variant="outline"
              onClick={() =>
                copyText(personal.email, 'Email copied to clipboard')
              }
            >
              <Copy size={14} />
              Copy email
            </Button>
          </GlassCard>

          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-title">Social</p>
            <div className="flex flex-col gap-2">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-ink-secondary hover:text-ink"
                  >
                    <Icon size={16} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, input }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium text-ink">{label}</span>
      {input}
      {error && <span className="text-xs text-danger">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-xl px-3 py-2 text-sm bg-app border ${
    error ? 'border-danger' : 'border-line'
  } text-ink outline-none focus:border-ink`;
}
