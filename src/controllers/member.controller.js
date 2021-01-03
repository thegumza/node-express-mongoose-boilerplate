const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { memberService } = require('../services');

const createMember = catchAsync(async (req, res) => {
  const member = await memberService.createMember(req.body);
  res.status(httpStatus.CREATED).send(member);
});

const getMembers = catchAsync(async (req, res) => {
  const filter = pick(req.query, [
    'id',
    'firstName',
    'lastName',
    'rank',
    'postalCode',
    'province',
    'subDistrict',
    'district',
    'villageNo',
    'addressNo',
    'cardId',
    'officer',
    'postalCode',
    'phoneNo',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await memberService.queryMembers(filter, options);
  res.send(result);
});

const getMember = catchAsync(async (req, res) => {
  const member = await memberService.getMemberById(req.params.id);
  if (!member) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Member not found');
  }
  res.send(member);
});

const updateMember = catchAsync(async (req, res) => {
  const member = await memberService.updateMemberById(req.params.id, req.body);
  res.send(member);
});

const deleteMember = catchAsync(async (req, res) => {
  await memberService.deleteMemberById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
};
