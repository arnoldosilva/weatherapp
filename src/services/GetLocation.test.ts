import GetLocation from './GetLocation'

jest.mock('./GetLocation', () => jest.fn().mockReturnValue({
  cordinates: {
    latitude: 0,
    longitude: 0
  },
  errorMsg: ''
}
))

type scope = 'fine' | 'coarse' | 'none';
type accuracy = 'fine' | 'coarse' | 'none';

describe('GetLocation component', () => {
  test('should return a location', async () => {
    let location = await GetLocation();
    expect(location).toBeTruthy();
  });

  test('should return a location with cordinates', async () => {
    let location = await GetLocation();
    expect(location.cordinates).toBeTruthy();
  });

  test('should return a location with cordinates latitude', async () => {
    let location = await GetLocation();
    expect(location.cordinates.latitude).toEqual(0);
  });

  test('should return a location with cordinates longitude', async () => {
    let location = await GetLocation();
    expect(location.cordinates.longitude).toEqual(0);
  });

  test('should return a location with errorMsg empty', async () => {
    let location = await GetLocation();
    expect(location.errorMsg).toBe('');
  });

  test('should return a location with errorMsg', async () => {
    (GetLocation as jest.Mock).mockReturnValue({
      cordinates: {
        latitude: 0,
        longitude: 0
      },
      errorMsg: 'There was an error'
    });
    let location = await GetLocation();
    expect(location.errorMsg).toBeTruthy();
  });


})
