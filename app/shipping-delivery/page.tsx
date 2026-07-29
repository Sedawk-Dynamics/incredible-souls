import { PolicyLayout, P, ContactCard } from '@/components/policy-layout'

export const metadata = {
  title: 'Address, Shipping & Delivery | Incredible Souls',
  description: 'Shipping, delivery and address policy for digital and physical products from Incredible Souls.',
}

export default function ShippingDeliveryPage() {
  return (
    <PolicyLayout title="Address, Shipping & Delivery">
      <P>
        Incredible Souls primarily provides digital services, including online courses, workshops, healing sessions,
        meditation programs, certifications, memberships and downloadable educational resources. Digital products are
        delivered electronically through our official learning platforms, registered email communications or other
        authorized digital channels.
      </P>

      <P>
        For physical products, merchandise, wellness items, books or event-related materials, where applicable, orders
        will be processed after successful payment confirmation and dispatched from our authorized fulfilment location
        in India. Delivery timelines are indicative and may vary depending on product availability, destination, courier
        services, public holidays, weather conditions or other circumstances beyond our reasonable control.
      </P>

      <P>
        Customers are responsible for providing complete and accurate shipping information at the time of placing an
        order. Incredible Souls shall not be responsible for delays, additional delivery charges or failed deliveries
        arising from incorrect, incomplete or outdated shipping details provided by the customer.
      </P>

      <P>
        <strong>
          The delivery charges paid at the time of purchase cover only one delivery attempt to the shipping address
          provided by the customer.
        </strong>{' '}
        If the shipment cannot be delivered due to the recipient&apos;s absence, refusal to accept delivery, an incorrect
        or incomplete address, or any other reason attributable to the customer, any subsequent delivery attempt or
        re-dispatch shall be subject to additional shipping and handling charges, which must be paid before the order is
        re-shipped.
      </P>

      <P>
        Risk of loss or damage to physical products passes to the customer upon delivery by the designated courier
        partner. While we endeavour to package every shipment with due care, Incredible Souls shall not be liable for
        delays or service interruptions caused by courier agencies, transportation providers, customs authorities or
        other third-party logistics partners.
      </P>

      <P>
        If a shipment is returned to us due to an incorrect address, repeated delivery failures, refusal to accept
        delivery or non-availability of the recipient, additional shipping charges may apply for re-dispatch.
      </P>

      <P>For any questions regarding shipping, order status or delivery, you may contact us during our business hours through:</P>

      <ContactCard
        name="Incredible Souls"
        company="Pune, Maharashtra, India"
        address=""
        website="www.incrediblesouls.co.in"
        email="byincrediblesouls@gmail.com"
        phone="+91 77090 08011"
      />

      <P>
        Shipping and delivery practices may be updated periodically to improve our services. The latest version
        published on our website shall govern all applicable orders.
      </P>
    </PolicyLayout>
  )
}
