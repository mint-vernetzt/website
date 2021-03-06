import { H4 } from "../Heading/Heading";
import { Icon, IconType } from "../Icon/Icon";
import { type Image as ImageType } from "../types.d";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Image from "../Image";

export interface ContactCardProps {
  classes?: string;
  headline: string;
  name: string;
  position: string;
  phone?: string | null;
  email?: string | null;
  avatar: ImageType;
}

export function ContactCard({
  classes,
  headline,
  name,
  position,
  phone = null,
  email = null,
  avatar,
}: ContactCardProps) {
  const className = classes ?? 'contact-card lg:px-8'
  return (
    <div className={className}>
      <H4>{headline}</H4>
      <div className="flex items-center mb-2">
        <div className="flex-18 mr-4">
          <Image
            data-testid="avatar"
            className="w-18 h-18 object-fill rounded-full"
            src={avatar.src as unknown as IGatsbyImageData}
            alt={avatar.alt}
          />
        </div>
        <div className="flex-auto">
          <p data-testid="name" className="mb-0 font-semibold text-neutral-800">
            {name}
          </p>
          <p data-testid="position" className="mb-0">
            {position}
          </p>
        </div>
      </div>
      <div className="pl-22">
        {phone !== null ? (
          <p className="text-xs text-neutral-800 font-semibold mb-2">
            <a href={`tel:${phone}`} className="flex items-center">
              <span className="icon w-4 h-4 mr-2">
                <Icon type={IconType.Telephone} />
              </span>
              <span data-testid="phone">{phone}</span>
            </a>
          </p>
        ) : null}
        {email !== null ? (
          <p className="text-xs text-neutral-800 font-semibold">
            <a href={`mailto:${email}`} className="flex items-center">
              <span className="icon w-4 h-4 mr-2 ">
                <Icon type={IconType.Envelope} />
              </span>
              <span data-testid="email">{email}</span>
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ContactCard;
