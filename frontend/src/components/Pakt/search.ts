export function search(
  partners: GatsbyTypes.MintPaktListQuery["partners"],
  q: string,
  stateId: string,
  institutionFormId: string
) {
  return partners.nodes.filter((partner) => {
    if (
      stateId !== "" &&
      partner.partnerInformations?.state?.slug !== stateId
    ) {
      return false;
    }

    if (
      institutionFormId !== "" &&
      partner.partnerInformations?.institutiontype?.slug !== institutionFormId
    ) {
      return false;
    }

    const lcTrimmedQ = q.trim().toLowerCase();
    const lcPartnerName = (partner.title ?? "").toLowerCase();
    if (lcTrimmedQ !== "" && !lcPartnerName.includes(lcTrimmedQ)) {
      return false;
    }

    return true;
  });
}
