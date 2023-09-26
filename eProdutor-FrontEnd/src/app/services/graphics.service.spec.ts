import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GraphicsService } from './graphics.service';
import { environment } from 'src/environments/environment';
describe('GraphicsService', () => {
  let service: GraphicsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Adicione o HttpClientTestingModule aqui
      providers: [GraphicsService],
    });

    service = TestBed.inject(GraphicsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should make an HTTP GET request to the correct URL', () => {
    const testData = [{ /* Seus dados de teste aqui */ }];
    service.obterDados().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(`${environment.URL_WEB_MANAGER}/dashFazendeiros/`);
    expect(req.request.method).toBe('GET');

    req.flush(testData);
  });
  
  afterEach(() => {
    httpMock.verify();
  });
});
